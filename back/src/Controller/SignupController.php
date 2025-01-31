<?php 

namespace App\Controller;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Signup;
use App\Repository\SignupRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class SignupController extends AbstractController
{
    #[Route('/log/signup/create', name: 'log_signup_create', methods: ['POST'])] /* Sign up */
    public function create(Request $request, ManagerRegistry $doctrine, UserPasswordHasherInterface $passwordHasher) : Response
    {
        $requestData = json_decode($request->getContent(), true);

        // If the userlastname, userfirstname, email, or password is missing, return an error
        if (!isset($requestData['userlastname']) || !isset($requestData['userfirstname']) || !isset($requestData['email']) || !isset($requestData['password'])) {
            return new Response('Des données sont manquantes', Response::HTTP_BAD_REQUEST);
        }

        // Create a new signup object
        $signup = new Signup($passwordHasher);
        $signup->setUserLastname($requestData['userlastname']);
        $signup->setUserfirstname($requestData['userfirstname']);
        $signup->setEmail($requestData['email']);
        $signup->setPassword($requestData['password'], $passwordHasher);                

        if ($signup->getUserlastname() and $signup->getUserfirstname() and $signup->getEmail() and $signup->getPassword()) {
            $em = $doctrine->getManager();
            $em->persist($signup);
            $em->flush();
            return new Response("Le compte a bien été crééééééééééééééééééééééééééééé", Response::HTTP_CREATED);
        }

        return new Response("Le compte a bien été créé", Response::HTTP_CREATED);
    }  

    #[Route('/log/delete/{id}', name: 'delete-user')] /* Delete a user */
    public function delete(ManagerRegistry $doctrine, string $id): Response
    {
        $repository = $doctrine->getRepository(Signup::class);
        $id = intval($id);
        $signup = $repository->find($id);

        if ($signup) {
            $em = $doctrine->getManager();
            $em->remove($signup);
            $em->flush();
            return new Response('User supprimée', Response::HTTP_OK);
        } else {
            return new Response('User non trouvée', Response::HTTP_NOT_FOUND);
        }
    }

    #[Route('/log/read/{id}', name: 'read-log')] /* Read a user */
    public function read(ManagerRegistry $doctrine, int $id)
    {
        $repository = $doctrine->getRepository(Signup::class);
        $signup = $repository->findOneBy(array("id" => $id));

        $data = [
            "id" => $signup->getId(),
            "userfirstname" => $signup->getUserFirstname(),
            "userlastname" => $signup->getUserLastname(),
            "email" => $signup->getEmail(),
            "password" => $signup->getPassword()
        ];
        return new JsonResponse($data);
    }

    #[Route('/log/read-all', name: 'readall-log')] /* Read all users */
    public function readAll(ManagerRegistry $doctrine)
    {
        $repository = $doctrine->getRepository(Signup::class);
        $signups = $repository->findAll();

        $data = [];
        foreach ($signups as $signup) {
            $data [] = [
                "id" => $signup->getId(),
                "userlastname" => $signup->getUserLastname(),
                "userfirstname" => $signup->getUserFirstname(),
                "email" => $signup->getEmail(),
                "roles" => $signup->getRoles()
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('/log/read-all/admin', name: 'readall-tri-admin')] /* Read all users with the role admin */
    public function readAllAdmin(EntityManagerInterface $em)
    {
        $signups = $em->getRepository(Signup::class)->findByRoles("ROLE_ADMIN");

        $data = [];
        foreach ($signups as $signup) {
            $data [] = [
                "id" => $signup->getId(),
                "userlastname" => $signup->getUserLastname(),
                "userfirstname" => $signup->getUserFirstname(),
                "email" => $signup->getEmail(),
                "roles" => $signup->getRoles()
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('/log/read-all/modo', name: 'readall-tri-modo')] /* Read all users with the role modo */
    public function readAllModo(EntityManagerInterface $em)
    {
        $signups = $em->getRepository(Signup::class)->findByRoles("ROLE_MODO");

        $data = [];
        foreach ($signups as $signup) {
            $data [] = [
                "id" => $signup->getId(),
                "userlastname" => $signup->getUserLastname(),
                "userfirstname" => $signup->getUserFirstname(),
                "email" => $signup->getEmail(),
                "roles" => $signup->getRoles()
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('/log/read-all/adherent', name: 'readall-tri-adherent')] /* Read all users with the role adherent */
    public function readAllAdherent(EntityManagerInterface $em)
    {
        $signups = $em->getRepository(Signup::class)->findByRoles("ROLE_ADHERENT");

        $data = [];
        foreach ($signups as $signup) {
            $data [] = [
                "id" => $signup->getId(),
                "userlastname" => $signup->getUserLastname(),
                "userfirstname" => $signup->getUserFirstname(),
                "email" => $signup->getEmail(),
                "roles" => $signup->getRoles()
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('/log/read-all/visitor', name: 'readall-tri-visitor')] /* Read all users with the role visitor */
    public function readAllVisitor(EntityManagerInterface $em)
    {
        $signups = $em->getRepository(Signup::class)->findByRoles("ROLE_VISITOR");

        $data = [];
        foreach ($signups as $signup) {
            $data [] = [
                "id" => $signup->getId(),
                "userlastname" => $signup->getUserLastname(),
                "userfirstname" => $signup->getUserFirstname(),
                "email" => $signup->getEmail(),
                "roles" => $signup->getRoles()
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('/log/update/{id}', name: 'update-log')] /* Update a user */
    public function update(ManagerRegistry $doctrine, int $id, Request $request, UserPasswordHasherInterface $passwordHasher)
    {
        $requestData = json_decode($request->getContent(), true);
        $repository = $doctrine->getRepository(Signup::class);
        $signup = $repository->findOneBy(array("id" => $id));

        $signup->setUserLastname($requestData["userlastname"]);
        $signup->setUserFirstname($requestData["userfirstname"]);
        $signup->setEmail($requestData["email"]);
        $signup->setPassword($requestData["password"], $passwordHasher);

        if ($signup->getUserLastname() and $signup->getUserFirstname() and $signup->getEmail() and $signup->getPassword()) {
            $em = $doctrine->getManager();
            $em->persist($signup);
            $em->flush();
            return new Response('Compte modifié', Response::HTTP_CREATED);
        }

        return new Response("Compte non modifié", Response::HTTP_CREATED);
    }
}

<?php

namespace App\Controller;

use App\Entity\Signup;
use App\Repository\SignupRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\Persistence\ManagerRegistry;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class RoleManagementController extends AbstractController
{
    #[Route("/role-management", name: "role-management")] /* Display all user with there roles */
    public function readAll(ManagerRegistry $doctrine)
    {
        $repository = $doctrine->getRepository(Signup::class);
        $signups = $repository->findAll();

        $data = [];
        foreach ($signups as $signup) {
            $data[] = [
                "id" => $signup->getId(),
                "userlastname" => $signup->getUserLastname(),
                "userfirstname" => $signup->getUserFirstname(),
                "roles" => $signup->getRoles()
            ];
        }

        return new JsonResponse($data);
    }

    #[Route("/role-management/role-admin", name: "tri_role_admin")] /* Display all user with the role admin */
    public function readAllAdmin(EntityManagerInterface $em)
    {
        $signups = $em->getRepository(Signup::class)->findByRoles("ROLE_ADMIN");

        $data = [];
        foreach ($signups as $signup) {
            $data[] = [
                "id" => $signup->getId(),
                "userlastname" => $signup->getUserLastname(),
                "userfirstname" => $signup->getUserFirstname(),
                "roles" => $signup->getRoles()
            ];
        }

        return new JsonResponse($data);
    }

    #[Route("/role-management/role-modo", name: "tri_role_modo")] /* Display all user with the role modo */
    public function readAllModo(EntityManagerInterface $em)
    {
        $signups = $em->getRepository(Signup::class)->findByRoles("ROLE_MODO");

        $data = [];
        foreach ($signups as $signup) {
            $data[] = [
                "id" => $signup->getId(),
                "userlastname" => $signup->getUserLastname(),
                "userfirstname" => $signup->getUserFirstname(),
                "roles" => $signup->getRoles()
            ];
        }

        return new JsonResponse($data);
    }

    #[Route("/role-management/role-adherent", name: "tri_role_adherent")] /* Display all user with the role adherent */
    public function readAllAdherent(EntityManagerInterface $em)
    {
        $signups = $em->getRepository(Signup::class)->findByRoles("ROLE_ADHERENT");

        $data = [];
        foreach ($signups as $signup) {
            $data[] = [
                "id" => $signup->getId(),
                "userlastname" => $signup->getUserLastname(),
                "userfirstname" => $signup->getUserFirstname(),
                "roles" => $signup->getRoles()
            ];
        }

        return new JsonResponse($data);
    }

    #[Route("/role-management/role-visitor", name: "tri_role_visitor")] /* Display all user with the role visitor */
    public function readAllVisitor(EntityManagerInterface $em)
    {
        $signups = $em->getRepository(Signup::class)->findByRoles("ROLE_VISITOR");

        $data = [];
        foreach ($signups as $signup) {
            $data[] = [
                "id" => $signup->getId(),
                "userlastname" => $signup->getUserLastname(),
                "userfirstname" => $signup->getUserFirstname(),
                "roles" => $signup->getRoles()
            ];
        }

        return new JsonResponse($data);
    }

    #[Route("/role-management/update/{id}", name: "update-role-management")] /* Update the role of a user */
    public function update(ManagerRegistry $doctrine, int $id, Request $request)
    {
        // check if id is an int
        if (!is_numeric($id)) {
            throw new \InvalidArgumentException("L'ID doit être un entier.");
        }
        $id = (int)$id;

        $entityManager = $doctrine->getManager();
        $repository = $entityManager->getRepository(Signup::class);
        $signup = $repository->find($id);

        // check if signup exists
        if (!$signup) {
            throw $this->createNotFoundException("Aucun utilisateur avec l'ID $id n'a été trouvé.");
        }

        $requestData = json_decode($request->getContent(), true);

        // check if roles exist
        if (!isset($requestData['roles'])) {
            return $this->json(['error' => 'Le champ roles est requis.'], Response::HTTP_BAD_REQUEST);
        }

        $roles = $requestData['roles'];

        // check if roles is an array
        if (!is_array($roles)) {
            return $this->json(['error' => 'Les rôles doivent être un tableau.'], Response::HTTP_BAD_REQUEST);
        }

        // modify roles
        $signup->setRoles($roles);

        try {
            $entityManager->flush();
            return $this->json(['message' => 'Rôle modifié avec succès.'], Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->json(['error' => 'Une erreur est survenue lors de la mise à jour du rôle.'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

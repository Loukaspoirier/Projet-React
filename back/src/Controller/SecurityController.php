<?php

namespace App\Controller;

use App\Entity\Signup;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    #[Route('/log/connection', name: 'connection')] /* Log in */
    public function connection(Request $request, EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher)
    {
        $requestData = json_decode($request->getContent(), true);

        // Extract the email and password from the request data
        $email = $requestData['email'] ?? null;
        $password = $requestData['password'] ?? null;

        // If the email or password is missing, return an error
        if (!$email || !$password) {
            return new JsonResponse(['error' => 'Adresse e-mail et mot de passe sont requis.'], 400);
        }

        // Find the user by email
        $user = $entityManager->getRepository(Signup::class)->findOneBy(['email' => $email]);

        // If the user is not found, return an error
        if (!$user) {
            return new JsonResponse(['error' => 'Utilisateur non trouve.'], 404);
        }

        // If the password is incorrect, return an error
        if (!$passwordHasher->isPasswordValid($user, $password)) {
            return new JsonResponse(['error' => 'Mot de passe incorrect.'], 400);
        }

        $response = new JsonResponse(['id' => $user->getId(), 'email' => $user->getEmail(), 'roles' => $user->getRoles()]);

        return $response;
    }

    /* #[Route('/check-id', name: "check-if")] /* Check if the localStorage id exist in the database
    public function checkId(ManagerRegistry $doctrine)
    {
        $repository = $doctrine->getRepository(Signup::class);
        $signups = $repository->findAll();

        // Extract the id from each signup
        $data = array_map(function ($signup) {
            return $signup->getId();
        }, $signups);

        // Filter out non-numeric ids
        $numericIds = array_filter($data, 'is_numeric');

        return new JsonResponse($numericIds);
    } */

    /* #[Route('/check', name: "check")] /* Check if the localStorage exist in the database
    public function check(ManagerRegistry $doctrine)
    {
        $repository = $doctrine->getRepository(Signup::class);
    $signups = $repository->findAll();

    $data = array_map(function ($signup) {
        return $signup->getId();
    }, $signups);

    $roles = array_map(function ($signup) {
        return implode(', ', $signup->getRoles());
    }, $signups);

    $email = array_map(function ($signup) {
        return $signup->getEmail();
    }, $signups);

    /* Filter out non-numeric ids
    $numericIds = array_filter($data, 'is_numeric');

    /* Créer un tableau de tableaux sans les clés
    $responseData = [
        $numericIds,
        $roles,
        $email
    ];

    return new JsonResponse($responseData);
    } */


    #[Route('/logout', name: 'logout')] /* Log out */
    public function logout(Request $request)
    {
        $response = new Response('Déconnexion réussie', Response::HTTP_OK);

        return $response;
    }
}

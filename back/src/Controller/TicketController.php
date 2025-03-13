<?php

namespace App\Controller;

use App\Entity\MessageTicket;
use App\Entity\Ticket;
use Doctrine\Persistence\ManagerRegistry;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class TicketController extends AbstractController
{
    #envoyer vers le back les éléments attendus par le formulaire puis renvoyer une réponse json 
    #[Route('/ticket/create', name: 'create-ticket', methods: ['POST', 'GET'])]
    public function create(Request $request, ManagerRegistry $doctrine): Response
    {
        $requestData = json_decode($request->getContent(), true);

        // Assurez-vous que les données nécessaires sont présentes
        if (!isset($requestData['title']) || !isset($requestData['description']) || !isset($requestData['email'])) {
            // Retourner une réponse d'erreur si des données sont manquantes
            return new Response('Des données sont manquantes', Response::HTTP_BAD_REQUEST);
        }

        // Faites ce que vous devez faire avec ces données, par exemple, enregistrez-les en base de données

        $ticket = new Ticket();
        $ticket->setContent($requestData['description']);
        $ticket->setEmail($requestData['email']);
        $ticket->setTitle($requestData['title']);


        if ($ticket->getTitle() and $ticket->getContent() and $ticket->getEmail()) {
            $em = $doctrine->getManager();
            $em->persist($ticket);
            $em->flush();
            return new Response('Ticket créé avec succès', Response::HTTP_CREATED);
        }

        // Retourner une réponse de succès
        return new Response('Ticket pas créé', Response::HTTP_CREATED);
    } 

    #[Route('/ticket', name: 'readAll-ticket')]
    public function readAll(ManagerRegistry $doctrine)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $repository = $doctrine->getRepository(Ticket::class);
        $tickets = $repository->findAll();

        $data = [];
        foreach ($tickets as $ticket) {
            $data[] = [
                "id" => $ticket->getId(),
                "title" => $ticket->getTitle(),
                "content" => $ticket->getContent(),
                "status" => $ticket->getStatus(),
                "email" => $ticket->getEmail()
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('/ticket/read/{id}', name: 'read-ticket')]
    public function read(ManagerRegistry $doctrine, int $id)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $repository = $doctrine->getRepository(Ticket::class);
        $ticket = $repository->findOneBy(array("id" => $id));

        $data = [
            "id" => $ticket->getId(),
            "title" => $ticket->getTitle(),
            "content" => $ticket->getContent(),
            "status" => $ticket->getStatus(),
            "email" => $ticket->getEmail()
        ];
        return new JsonResponse($data);
    }

    #[Route('/ticket/update/{id}', name: 'update-ticket')]
    public function update(ManagerRegistry $doctrine, int $id, Request $request)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $requestData = json_decode($request->getContent(), true);
        $repository = $doctrine->getRepository(Ticket::class);
        $ticket = $repository->findOneBy(array("id" => $id));

        $ticket->setTitle($requestData['title']);
        $ticket->setEmail($requestData['email']);
        $ticket->setContent($requestData['description']);

        try {
            $ticket->setStatus($requestData["status"]);
        } catch (Exception $e) {
            echo 'Une exception a été attrapée : ' . $e->getMessage();
        }


        if ($ticket->getTitle() and $ticket->getContent() and $ticket->getEmail()) {
            $em = $doctrine->getManager();
            $em->persist($ticket);
            $em->flush();
            return new Response('Ticket modifié', Response::HTTP_CREATED);
        }

        return new Response("Ticket non modifié", Response::HTTP_CREATED);
    }

    #[Route('/ticket/delete', name: 'delete-ticket')]
    public function delete(ManagerRegistry $doctrine, Request $request)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $requestData = json_decode($request->getContent(), true);

        $repository = $doctrine->getRepository(Ticket::class);
        $tickets = $repository->findAll();

        $rightTicket = new Ticket;
        foreach ($tickets as $ticket) {
            if ($ticket->getId() == $requestData) {
                $rightTicket = $ticket;
            }
        }

        $repository = $doctrine->getRepository(MessageTicket::class);
        $messages = $repository->findAll();

        foreach ($messages as $message) {
            if ($message->getTicket()->getId() == $rightTicket->getId()) {
                $em = $doctrine->getManager();
                $em->remove($message);
                $em->flush();
            }
        }

        $em = $doctrine->getManager();
        $em->remove($rightTicket);
        $em->flush();
        return new Response('Ticket suprimé avec les messages', Response::HTTP_CREATED);
    }
}

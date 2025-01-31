<?php

namespace App\Controller;

use App\Entity\MessageTicket;
use App\Entity\Ticket;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MessageTicketController extends AbstractController
{
    #[Route('/ticket/{ticketId}/message/create', name: 'create-ticket-message', methods: ['POST'])]
    public function create(Request $request, ManagerRegistry $doctrine, int $ticketId): Response
    {
        $requestData = json_decode($request->getContent(), true);

        if (!isset($requestData['content']) || !isset($requestData['email'])) {
            return new Response('Des données sont manquantes', Response::HTTP_BAD_REQUEST);
        }

        $ticket = new Ticket();
        $repository = $doctrine->getRepository(Ticket::class);
        $ticket = $repository->findOneBy(array("id" => $ticketId));

        $message = new MessageTicket();
        $message->setTicket($ticket);
        $message->setContent($requestData['content']);
        $message->setEmail($requestData['email']);
                

        if ($message->getContent() and $message->getEmail() and $message->getTicket()) {
            $em = $doctrine->getManager();
            $em->persist($message);
            $em->flush();
            return new Response('ticket-message créé avec succès', Response::HTTP_CREATED);
        }

        return new Response('ticket-message pas créé', Response::HTTP_CREATED);
    }

    #[Route('/ticket/message', name: 'readAll-ticket-message')]
    public function readAll(ManagerRegistry $doctrine)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $repository = $doctrine->getRepository(MessageTicket::class);
        $tickets = $repository->findAll();
        
        $data = [];
        foreach ($tickets as $ticket){
            $data[] = [
                "id" => $ticket->getId(), 
                "content" => $ticket->getContent(),
                "email" => $ticket->getEmail(),
                "ticket" => $ticket->getTicket()->getId()
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('/ticket/message/read/{id}', name: 'read-ticket-message',  methods: ['GET'])]
    public function read(ManagerRegistry $doctrine, int $id)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $repository = $doctrine->getRepository(MessageTicket::class);
        $ticket = $repository->findOneBy(array("id" => $id));
        
        $data = [
            "id" => $ticket->getId(),
            "content" => $ticket->getContent(),
            "email" => $ticket->getEmail()
        ];
        return new JsonResponse($data);
    }

    #[Route('/ticket/message/update/{id}', name: 'update-ticket-message')]
    public function update(ManagerRegistry $doctrine, int $id, Request $request)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $requestData = json_decode($request->getContent(), true);
        $repository = $doctrine->getRepository(MessageTicket::class);
        $ticket = $repository->findOneBy(array("id" => $id));
        
        $ticket->setContent($requestData['content']);
        $ticket->setEmail($requestData['email']);

        if ($ticket->getContent() and $ticket->getEmail()) {
            $em = $doctrine->getManager();
            $em->persist($ticket);
            $em->flush();
            return new Response('ticket-message modifié', Response::HTTP_CREATED);
        }

        return new Response("ticket-message non modifié", Response::HTTP_CREATED);

    }

    #[Route('/ticket/message/delete', name: 'delete-ticket-message')]
    public function delete(ManagerRegistry $doctrine, Request $request)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $requestData = json_decode($request->getContent(), true);

        $repository = $doctrine->getRepository(MessageTicket::class);
        $tickets = $repository->findAll();
        
        $rightTicket = new MessageTicket;
        foreach ($tickets as $ticket){
            if ($ticket->getId() == $requestData) {
                $rightTicket = $ticket;
            }
        }

        $em = $doctrine->getManager();
        $em->remove($rightTicket);
        $em->flush();
        return new Response('ticket-message suprimé', Response::HTTP_CREATED);
    } 
}

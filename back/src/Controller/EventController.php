<?php

namespace App\Controller;

use App\Entity\Event;
use App\Repository\EventRepository;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EventController extends AbstractController
{

    #[Route('/', name: 'app_event')]
    public function index(ManagerRegistry $doctrine, EventRepository $eventRepository)
    {
        $repository = $doctrine->getRepository(Event::class);
        $troisPlusRecents = $eventRepository->findTroisPlusRecents();

        $data = [];
        foreach ($troisPlusRecents as $activity) {
            $data[] = [
                "id" => $activity->getId(),
                "description" => $activity->getDescription(),
                "title" => $activity->getTitle(),
                "date" => $activity->getDate(),
                "picture" => $activity->getPicture(),
            ];
        }
        return new JsonResponse($data);
    }

    #[Route('/event/create', name: 'create-event', methods: ['POST', 'GET'])]
    public function create(Request $request, ManagerRegistry $doctrine): Response
    {

        $requestData = json_decode($request->getContent(), true);

        if (!isset($requestData['title']) || !isset($requestData['picture']) || !isset($requestData['date']) || !isset($requestData['description'])) {
            return new Response('Des données sont manquantes', Response::HTTP_BAD_REQUEST);
        }
        $event = new Event();
        $event->setTitle($requestData['title']);
        $event->setPicture($requestData['picture']);
        $event->setDate($requestData['date']);
        $event->setDescription($requestData['description']);

        if ($event->getTitle() and $event->getPicture() and $event->getDate() and $event->getDescription()) {
            $em = $doctrine->getManager();
            $em->persist($event);
            $em->flush();
            return new Response('Event créé avec succès', Response::HTTP_CREATED);
        }
        return new Response('Event créé avec succès', Response::HTTP_CREATED);
    }

    #[Route('/event', name: 'readAll-event')]
    public function readAll(ManagerRegistry $doctrine)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $repository = $doctrine->getRepository(Event::class);
        $events = $repository->findAll();

        $data = [];
        foreach ($events as $event) {
            $data[] = [
                "id" => $event->getId(),
                "title" => $event->getTitle(),
                "picture" => $event->getPicture(),
                "date" => $event->getDate(),
                "description" => $event->getDescription(),
            ];
        }
        return new JsonResponse($data);
    }

    
    #[Route('/event/read/{id}', name: 'read-event')]
    public function read(ManagerRegistry $doctrine, int $id)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $repository = $doctrine->getRepository(Event::class);
        $event = $repository->findOneBy(array("id" => $id));

        $data = [
            "id" => $event->getId(),
            "title" => $event->getTitle(),
            "picture" => $event->getPicture(),
            "date" => $event->getDate(),
            "description" => $event->getDescription(),
        ];
        return new JsonResponse($data);
    }
    #[Route('/event/update/{id}', name: 'update-event')]
    public function update(ManagerRegistry $doctrine, Request $request, int $id): Response
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $requestData = json_decode($request->getContent(), true);
        $repository = $doctrine->getRepository(Event::class);
        $event = $repository->findOneBy(array("id" => $id));

        $event->setTitle($requestData['title']);
        $event->setPicture($requestData['picture']);
        $event->setDate($requestData['date']);
        $event->setDescription($requestData['description']);
        
        if ($event->getTitle() and $event->getPicture() and $event->getDate() and $event->getDescription()) {
            $em = $doctrine->getManager();
            $em->persist($event);
            $em->flush();
            return new Response('Event modifié avec succès', Response::HTTP_CREATED);
        }
        return new Response('Event pas modifié', Response::HTTP_CREATED);
    }
    
    #[Route('/event/delete', name: 'event-delete')]
    public function delete(Request $request, ManagerRegistry $doctrine)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $requestData = json_decode($request->getContent(), true);
        $repository = $doctrine->getRepository(Event::class);
        $events = $repository->findAll();
        $rightEvent = new Event;
        foreach ($events as $event) {
            if ($event->getId() == $requestData) {
                $rightEvent = $event;
            }
        }
        $em = $doctrine->getManager();
        $em->remove($rightEvent);
        $em->flush();
        return new Response('Event supprimé avec succès', Response::HTTP_OK);
    }
}

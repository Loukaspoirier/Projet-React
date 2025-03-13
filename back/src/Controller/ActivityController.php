<?php

namespace App\Controller;

use App\Entity\Activity;
use DateTimeImmutable;
use DateTimeInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use DateTime;

class ActivityController extends AbstractController
{
    #envoyer vers le back les éléments attendus par le formulaire puis renvoyer une réponse json 
    #[Route('/activity/create', name: 'create-activity', methods: ['POST', 'GET'])]
    public function create(Request $request, ManagerRegistry $doctrine): Response
    {
        $requestData = json_decode($request->getContent(), true);

        // Assurez-vous que les données nécessaires sont présentes
        if (!isset($requestData['description'])) {
            // Retourner une réponse d'erreur si des données sont manquantes
            return new Response('Des données sont manquantes', Response::HTTP_BAD_REQUEST);
        }

        // Faites ce que vous devez faire avec ces données, par exemple, enregistrez-les en base de données

        $activity = new Activity();

        $activity->setDescription($requestData['description']);
        $activity->setQuestion($requestData['question']);
        $vide = [];
        $date = new DateTime();
        $activity->setDate($date);
        $activity->setLikes(0);
        $activity->setYes(0);
        $activity->setNo(0);
        $activity->setListeLikes($vide);

        if ($activity->getDescription()) {
            $em = $doctrine->getManager();
            $em->persist($activity);
            $em->flush();
            return new Response('Activité créé avec succès', Response::HTTP_CREATED);
        }
        // Retourner une réponse de succès
        return new Response(Response::HTTP_CREATED);
    }

    #[Route('/activity', name: 'readAll-activity')]
    public function readAll(ManagerRegistry $doctrine)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $repository = $doctrine->getRepository(Activity::class);
        $activitys = $repository->findAll();

        $data = [];
        foreach ($activitys as $activity) {
            $data[] = [
                "id" => $activity->getId(),
                "description" => $activity->getDescription(),
                "question" => $activity->getQuestion(),
                "date" => $activity->getDate(),
                "likes" => $activity->getLikes(),
                "yes" => $activity->getYes(),
                "no" => $activity->getNo(),
                "listLikes" => $activity->getListeLikes(),
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('/activity/read/{id}', name: 'read-activity')]
    public function read(ManagerRegistry $doctrine, int $id)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $repository = $doctrine->getRepository(Activity::class);
        $activity = $repository->findOneBy(array("id" => $id));

        $data = [
            "id" => $activity->getId(),
            "description" => $activity->getDescription(),
            "date" => $activity->getDate()
        ];
        return new JsonResponse($data);
    }

    #[Route('/activity/update/{id}', name: 'update-activity')]
    public function update(ManagerRegistry $doctrine, int $id, Request $request)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $requestData = json_decode($request->getContent(), true);
        $repository = $doctrine->getRepository(Activity::class);
        $activity = $repository->findOneBy(array("id" => $id));

        $activity->setDescription($requestData['description']);
        /* $activity->setQuestion($requestData['question']); */

        if ($activity->getDescription() and $activity->getDate()) {
            $em = $doctrine->getManager();
            $em->persist($activity);
            $em->flush();
            return new Response('activity modifié', Response::HTTP_CREATED);
        }

        return new Response("activity non modifié", Response::HTTP_CREATED);
    }
    #[Route('/activity/update/love/{id}', name: 'love-update-activity')]
    public function updateLove(ManagerRegistry $doctrine, int $id, Request $request)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $requestData = json_decode($request->getContent(), true);
        $repository = $doctrine->getRepository(Activity::class);
        $activity = $repository->findOneBy(array("id" => $id));
        $tabId = [];

        $Liste = $activity->getListeLikes();
        for ($i = 0; $i < count($activity->getListeLikes()); $i++) {
            array_push($tabId, $Liste[$i]);
        }

        if ($requestData['likes'] == 1) {
            $setter = $activity->getLikes() + 1;
            array_push($tabId, $requestData['id']);
        } else {
            $index = array_search($requestData['id'], $tabId);
            if ($index !== false) {
                array_splice($tabId, $index, 1);
            }
            $setter = $activity->getLikes() - 1;
        }

        $activity->setLikes($setter);

        $activity->setListeLikes($tabId);

        if ($activity->getLikes()) {
            $em = $doctrine->getManager();
            $em->persist($activity);
            $em->flush();
            return new Response('activity modifié', Response::HTTP_CREATED);
        }

        return new Response("activity non modifié", Response::HTTP_CREATED);
    }
    #[Route('/activity/update/sondage/{id}', name: 'sondage-update-activity')]

    public function updateSondage(ManagerRegistry $doctrine, int $id, Request $request)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $requestData = json_decode($request->getContent(), true);
        $repository = $doctrine->getRepository(Activity::class);
        $activity = $repository->findOneBy(array("id" => $id));

        if ($requestData['yes'] == 1 && $requestData['no']  == 0) {
            $setterYes = $activity->getYes() + $requestData['yes'];
            if ($activity->getNo() >= 0) {
                $setterNo = $activity->getNo() - $requestData['no'];
            }
        } else if ($requestData['no'] == 1 && $requestData['yes'] == 0) {
            $setterNo = $activity->getNo() + $requestData['no'];
            if ($activity->getYes() >= 0) {
                $setterYes = $activity->getYes() - $requestData['yes'];
            }
        }

        $activity->setYes($setterYes);
        $activity->setNo($setterNo);

        if ($activity->getYes() and $activity->getNo()) {
            $em = $doctrine->getManager();
            $em->persist($activity);
            $em->flush();
            return new Response('activity modifié', Response::HTTP_CREATED);
        }

        return new Response("activity non modifié", Response::HTTP_CREATED);
    }

    #[Route('/activity/delete', name: 'delete-activity')]
    public function delete(ManagerRegistry $doctrine, Request $request)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $requestData = json_decode($request->getContent(), true);

        $repository = $doctrine->getRepository(Activity::class);
        $activitys = $repository->findAll();

        $rightactivity = new Activity;
        foreach ($activitys as $activity) {
            if ($activity->getId() == $requestData) {
                $rightactivity = $activity;
            }
        }

        $em = $doctrine->getManager();
        $em->remove($rightactivity);
        $em->flush();
        return new Response('activity suprimé', Response::HTTP_CREATED);
    }
}

<?php

namespace App\Controller;

use App\Entity\Photo;
use App\Form\PhotoType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class PhotoController extends AbstractController
{
    #[Route('/photo/create', name: 'create-photo', methods: ['POST'])]
    public function create(Request $request, ManagerRegistry $doctrine): Response
    {
        $requestData = json_decode($request->getContent(), true);

        if (!isset($requestData['title']) || !isset($requestData['description']) || !isset($requestData['image'])) {
            return new Response('Des données sont manquantes', Response::HTTP_BAD_REQUEST);
        }


        $photo = new Photo();
        $photo->setDescription($requestData['description']);
        $photo->setImage($requestData['image']);
        $photo->setTitle($requestData['title']);


        if ($photo->getTitle() and $photo->getDescription() and $photo->getImage()) {
            $em = $doctrine->getManager();
            $em->persist($photo);
            $em->flush();
            return new Response('Photo créé avec succès', Response::HTTP_CREATED);
        }

        return new Response('Photo pas créé', Response::HTTP_CREATED);
    }

    #[Route('/photo', name: 'readAll-Photo')]
    public function readAll(ManagerRegistry $doctrine)
    {
        $repository = $doctrine->getRepository(Photo::class);
        $photos = $repository->findAll();

        $data = [];
        foreach ($photos as $photo) {
            $data[] = [
                "id" => $photo->getId(),
                "title" => $photo->getTitle(),
                "description" => $photo->getDescription(),
                "image" => $photo->getImage(),
            ];
        }

        return new JsonResponse($data);
    }

    #[Route('/photo/read/{id}', name: 'read-photo')]
    public function read(ManagerRegistry $doctrine, int $id)
    {
        $repository = $doctrine->getRepository(Photo::class);
        $photo = $repository->findOneBy(array("id" => $id));

        $data = [
            "id" => $photo->getId(),
            "title" => $photo->getTitle(),
            "description" => $photo->getDescription(),
            "image" => $photo->getImage(),
        ];
        return new JsonResponse($data);
    }

    #[Route('/photo/update/{id}', name: 'update-photo')]
    public function update(ManagerRegistry $doctrine, int $id, Request $request)
    {
        $requestData = json_decode($request->getContent(), true);
        $repository = $doctrine->getRepository(Photo::class);
        $photo = $repository->findOneBy(array("id" => $id));

        $photo->setTitle($requestData['title']);
        $photo->setImage($requestData['image']);
        $photo->setDescription($requestData['description']);

        if ($photo->getTitle() and $photo->getDescription() and $photo->getImage()) {
            $em = $doctrine->getManager();
            $em->persist($photo);
            $em->flush();
            return new Response('Photo modifié', Response::HTTP_CREATED);
        }

        return new Response("Photo non modifié", Response::HTTP_CREATED);
    }

    #[Route('/photo/delete/{id}', name: 'delete-photo')]
    public function delete(ManagerRegistry $doctrine, string $id): Response
    {
        $repository = $doctrine->getRepository(Photo::class);
        $id = intval($id);
        $photo = $repository->find($id);

        if ($photo) {
            $em = $doctrine->getManager();
            $em->remove($photo);
            $em->flush();
            return new Response('Photo supprimée', Response::HTTP_OK);
        } else {
            return new Response('Photo non trouvée', Response::HTTP_NOT_FOUND);
        }
    }
}

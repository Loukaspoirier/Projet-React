<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Shop;


class ShopController extends AbstractController
{
    #[Route('/shop', name: 'readAll-Shop')]
    public function readAll(ManagerRegistry $doctrine)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $repository = $doctrine->getRepository(Shop::class);
        $shops = $repository->findAll();

        $data = [];
        foreach ($shops as $shop) {
            $data[] = [
                "id" => $shop->getId(),
                "title" => $shop->getTitle(),
                "price" => $shop->getPrice(),
                "picture" => $shop->getPicture(),
                "description" => $shop->getDescription(),
            ];
        }
        return new JsonResponse($data);
    }

    #[Route('/shop/read/{id}', name: 'read-shop')]
    public function read(ManagerRegistry $doctrine, int $id)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $repository = $doctrine->getRepository(Shop::class);
        $shop = $repository->findOneBy(array("id" => $id));

        $data = [
            "id" => $shop->getId(),
            "title" => $shop->getTitle(),
            "price" => $shop->getPrice(),
            "picture" => $shop->getPicture(),
            "description" => $shop->getDescription(),
        ];
        return new JsonResponse($data);
    }

    #[Route('/shop/create', name: 'create-shop', methods: ['POST', 'GET'])]
    public function create(Request $request, ManagerRegistry $doctrine): Response
    {
        $requestData = json_decode($request->getContent(), true);

        if (!isset($requestData['title']) || !isset($requestData['price']) || !isset($requestData['picture']) || !isset($requestData['description'])) {
            return new Response('Des données sont manquantes', Response::HTTP_BAD_REQUEST);
        }
        $shop = new Shop();
        $shop->setTitle($requestData['title']);
        $shop->setPrice($requestData['price']);
        $shop->setPicture($requestData['picture']);
        $shop->setDescription($requestData['description']);

        if ($shop->getTitle() and $shop->getPicture() and $shop->getPrice() and $shop->getDescription()) {
            $em = $doctrine->getManager();
            $em->persist($shop);
            $em->flush();
            return new Response('Article créé avec succès', Response::HTTP_CREATED);
        }
        return new Response('Article créé avec succès', Response::HTTP_CREATED);
    }

    #[Route('/shop/update/{id}', name: 'update-shop')]
    public function update(ManagerRegistry $doctrine, Request $request, int $id): Response
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $requestData = json_decode($request->getContent(), true);
        $repository = $doctrine->getRepository(Shop::class);
        $shop = $repository->findOneBy(array("id" => $id));

        $shop->setTitle($requestData['title']);
        $shop->setPrice($requestData['price']);
        $shop->setPicture($requestData['picture']);
        $shop->setDescription($requestData['description']);
        
        if ($shop->getTitle() and $shop->getPicture() and $shop->getPrice() and $shop->getDescription()) {
            $em = $doctrine->getManager();
            $em->persist($shop);
            $em->flush();
            return new Response('Article modifié avec succès', Response::HTTP_OK);
        }
        return new Response('Article pas modifié', Response::HTTP_CREATED);
    }

    #[Route('/shop/delete', name: 'shop-delete')]
    public function delete(Request $request, ManagerRegistry $doctrine)
    {
        #$this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $requestData = json_decode($request->getContent(), true);
        $repository = $doctrine->getRepository(Shop::class);
        $shops = $repository->findAll();
        $rightShop = new Shop;
        foreach ($shops as $shop) {
            if ($shop->getId() == $requestData) {
                $rightShop = $shop;
            }
        }
        $em = $doctrine->getManager();
        $em->remove($rightShop);
        $em->flush();
        return new Response('Article supprimé avec succès', Response::HTTP_OK);
    }
}

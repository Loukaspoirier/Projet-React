<?php 
// src/Controller/ColorController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ColorController extends AbstractController
{
    #[Route('/generate-color-json', name: 'generate_color_json')]
    public function getColorData()
    {
        $color = '#800080'; // Violet

        $data = ['color' => $color];

        // Écrire le contenu dans un fichier
        /* $filename = $this->getParameter('kernel.project_dir') . '/public/color_data.json';
        file_put_contents($filename, json_encode($data)); */

        // Retourner une réponse JSON avec le nom du fichier
        return new JsonResponse($data);
    }
}
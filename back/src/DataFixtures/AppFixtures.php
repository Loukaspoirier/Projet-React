<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Signin;
use App\Entity\Ticket;


class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
    // Tickets
    $ticket = new Ticket();
    $ticket->setTitle('Titre du ticket 1')->setContent('Contenu du ticket 1')->setStatus('New')->setStatusBadge('secondary')->setEmail('github@gmail.com');
    
    $manager->persist($ticket);
    $manager->flush();

    $ticket = new Ticket();
    $ticket->setTitle('Titre du ticket 2')->setContent('Contenu du ticket 2')->setStatus('New')->setStatusBadge('secondary')->setEmail('github@gmail.com');
    
    $manager->persist($ticket);
    $manager->flush();

    $ticket = new Ticket();
    $ticket->setTitle('Titre du ticket 3')->setContent('Contenu du ticket 3')->setStatus('In Progress')->setStatusBadge('warning')->setEmail('github@gmail.com');
    
    $manager->persist($ticket);
    $manager->flush();

    $ticket = new Ticket();
    $ticket->setTitle('Titre du ticket 4')->setContent('Contenu du ticket 4')->setStatus('Solved')->setStatusBadge('success')->setEmail('github@gmail.com');
    
    $manager->persist($ticket);
    $manager->flush();

    // Signin
    // $user = new User();
    // $user->setUserlastname('Mulard')->setUserfirstname('Alexandre')->setEmail('alexandre.mulard@ecole-hexagone.com')->setPassword('MotDePasse')->setRoles(['Role_ADMIN']);

    // $manager->persist($ticket);
    // $manager->flush();

    // $user = new User();
    // $user->setUserlastname('Gaudry')->setUserfirstname('Matthieu')->setEmail('matthieu.gaudry@ecole-hexagone.com')->setPassword('MotDePasse')->setRoles(['Role_ADMIN']);

    // $manager->persist($ticket);
    // $manager->flush();

    // $user = new User();
    // $user->setUserlastname('Khermimoun')->setUserfirstname('Ismaël')->setEmail('ismael.khermimoun@ecole-hexagone.com')->setPassword('MotDePasse')->setRoles(['Role_MODO']);

    // $manager->persist($ticket);
    // $manager->flush();

    // $user = new User();
    // $user->setUserlastname('Richard')->setUserfirstname('Maxime')->setEmail('maxime.richard@ecole-hexagone.com')->setPassword('MotDePasse'->setRoles(['Role_MODO']);

    // $manager->persist($ticket);
    // $manager->flush();

    // $user = new User();
    // $user->setUserlastname('Khlifi')->setUserfirstname('Sirine')->setEmail('sirine.khlifi@ecole-hexagone.com')->setPassword('MotDePasse')->setRoles(['Role_ADHERENT']);

    // $manager->persist($ticket);
    // $manager->flush();

    // $user = new User();
    // $user->setUserlastname('Poirier')->setUserfirstname('Loukas')->setEmail('loukas.poirier@ecole-hexagone.com')->setPassword('MotDePasse')->setRoles(['Role_ADHERENT']);

    // $manager->persist($ticket);
    // $manager->flush();

    // $user = new User();
    // $user->setUserlastname('Pinède')->setUserfirstname('Luka')->setEmail('luka.pinede@ecole-hexagone.com')->setPassword('MotDePasse')->setRoles(['Role_ADHERENT']);

    // $manager->persist($ticket);
    // $manager->flush();

    // $user = new User();
    // $user->setUserlastname('Mayer')->setUserfirstname('Xavier')->setEmail('xavier.mayer@ecole-hexagone.com')->setPassword('MotDePasse')->setRoles(['Role_VISITOR']);

    // $manager->persist($ticket);
    // $manager->flush();
    }
}
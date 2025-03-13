<?php

namespace App\Form;

use App\Entity\Ticket;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TicketType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add("title", TextType::class, ['label' => "Titre"])
            ->add("content", TextType::class, ['label' => "Description"])
            ->add("state", TextType::class, ['label' => "Etat"])
            ->add("email", EmailType::class, ['label' => "Mail"]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            "data_class" => Ticket::class,
        ]);
    }
}

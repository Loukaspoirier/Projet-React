<?php

namespace App\Form;

use App\Entity\Photo;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PhotoType extends AbstractType
{

    // Builds the form with fields for title, description, and image
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add("title", TextType::class, ['label' => "Title"])
            ->add("description", TextType::class, ['label' => "Description"])
            ->add("image", TextType::class, ['label' => "Image"]);
    }

    // Configures the default options for the form
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            "data_class" => Photo::class,
        ]);
    }
}
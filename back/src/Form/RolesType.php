<?php

namespace App\Form;

use App\Entity\Signup;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RolesType extends AbstractType // Modify the user's roles
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add("roles", ChoiceType::class, [ // Add a dropdown menu for the roles
                'choices' => [
                    'admin' => 'ROLE_ADMIN',
                    'modo' => 'ROLE_MODO',
                    'adherent' => 'ROLE_ADHERENT',
                    'visitor' => 'ROLE_VISITOR'
                ],
                'label' => "Rôles"]);
    }

    public function configureOptions(OptionsResolver $resolver) // Set the data class to Signup
    {
        $resolver->setDefaults([ 
            "data_class" => Signup::class,
        ]);
    }
}

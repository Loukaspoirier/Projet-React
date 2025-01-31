<?php

namespace App\Form;

use App\Entity\Signup;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class SecurityType extends AbstractType // Check the user's email and password
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add("email", TextType::class, [ // Add a text field for the email
            "label" => "Email",
            "attr" => [
                "placeholder" => "Votre email"
            ]
        ]);
        $builder->add("password", RepeatedType::class, [ // Add two password fields for the password
            "label" => "Mot de passe",
            'type' => PasswordType::class,
            'invalid_message' => 'Les mots de passe doivent être identiques.',
            'required' => true,
            "attr" => [
                "placeholder" => "********"
            ],
        ]);
    }
    public function configureOptions(OptionsResolver $resolver): void // Set the data class to Signup
    {
        $resolver->setDefaults([
            'data_class' => Signup::class
        ]);
    }
}

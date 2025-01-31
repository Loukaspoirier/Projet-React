<?php

namespace App\Form;

use App\Entity\Signup;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class SignupType extends AbstractType // Create a form for the signup
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add("userlastname", TextType::class, [ // Add a text field for the lastname
            "label" => "Nom",
            "attr" => [
                "placeholder" => "Votre nom"
            ]
        ]);
        $builder->add("userfirstname", TextType::class, [ // Add a text field for the firstname
            "label" => "Prénom",
            "attr" => [
                "placeholder" => "Votre prénom"
            ]
        ]);
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
                'first_options'  => ['label' => 'Mot de passe', 'attr' => ["placeholder" => "Votre mot de passe"]],
                'second_options' => ['label' => 'Confirmer le mot de passe', 'attr' => ["placeholder" => "Confirmez votre mot de passe"]]
        ]);
    }
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Signup::class
        ]);
    }
}

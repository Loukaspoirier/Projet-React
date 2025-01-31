<?php

namespace App\Entity;

use App\Repository\SignupRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[ORM\Entity(repositoryClass: SignupRepository::class)]
class Signup implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 70)]
    private ?string $userlastname = null;

    #[ORM\Column(length: 70)]
    private ?string $userfirstname = null;

    #[ORM\Column(length: 70, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = ['ROLE_VISITOR']; // default role

    #[ORM\Column]
    private ?string $hashedPassword = null; // hashed password


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserLastname(): ?string
    {
        return $this->userlastname;
    }

    public function setUserLastname(string $userlastname): static
    {
        $this->userlastname = $userlastname;

        return $this;
    }

    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    public function getPassword(): string
    {
        return $this->hashedPassword;
    }

    public function setPassword(string $password, UserPasswordHasherInterface $passwordHasher): self
    {
        $this->hashedPassword = $passwordHasher->hashPassword($this, $password);

        return $this;
    }


    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getUserFirstname(): ?string
    {
        return $this->userfirstname;
    }

    public function setUserFirstname(?string $userfirstname): self
    {
        $this->userfirstname = $userfirstname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getRoles(): array
    {
        return $this->roles;
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }
}

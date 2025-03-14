<?php

namespace App\Repository;

use App\Entity\Signup;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * @extends ServiceEntityRepository<Signup>
 * @implements PasswordUpgraderInterface<Signup>
 *
 * @method Signup|null find($id, $lockMode = null, $lockVersion = null)
 * @method Signup|null findOneBy(array $criteria, array $orderBy = null)
 * @method Signup[]    findAll()
 * @method Signup[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SecurityRepository extends ServiceEntityRepository implements PasswordUpgraderInterface // Upgrade the user's password
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Signup::class);
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
{
    if (!$user instanceof Signup) {
        throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', $user::class));
    }

    // Injecter UserPasswordHasherInterface via l'injection de dépendance dans votre repository
    $passwordHasher = $this->passwordHasher;

    $user->setPassword($newHashedPassword, $passwordHasher); // Set the new password into the hashedPassword property

    $this->getEntityManager()->persist($user);
    $this->getEntityManager()->flush();
}


//    /**
//     * @return Signup[] Returns an array of Signup objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('u.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Signup
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}

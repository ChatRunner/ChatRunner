<?php
/**
 * Created by PhpStorm.
 * User: richard
 * Date: 10/4/17
 * Time: 5:18 PM
 */

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class IndexController
 * @package App\Controller
 * @Route("/")
 */
class IndexController extends Controller
{
    /**
     * @Route("/")
     */
    public function indexAction(): Response {
        return $this->render("index.html.twig");
    }
}
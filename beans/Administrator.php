<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/2
 * Time: 17:16
 */
class Administrator{
    public $username;
    public $password;
    function __construct($username,$password)
    {
        $this->username = $username;
        $this->password = $password;
    }
}
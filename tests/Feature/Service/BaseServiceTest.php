<?php

namespace Tests\Feature\Service;

use Tests\TestCase;

abstract class BaseServiceTest extends TestCase
{
    protected function getServiceStructure(): array
    {
        return [
            'id',
            'title',
            'description',
            'icon'
        ];
    }

    protected function getServicesStructure(): array
    {
        return [
            'data' => [
                '*' =>  $this->getServiceStructure()
            ]
        ];
    }

}

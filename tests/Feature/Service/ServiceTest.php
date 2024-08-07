<?php

namespace Tests\Feature\Service;


class ServiceTest extends BaseServiceTest
{
    public function test_get_services(): void
    {
        $response = $this->get('api/');

        $response->assertStatus(200)
            ->assertJsonStructure(parent::getServicesStructure());
    }

    public function test_create_service(): void
    {
        $response = $this->post('api/', [
            'title' => 'Hello',
            'description' => 'World'
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure(parent::getServiceStructure());
    }

    public function test_delete_service(): void
    {
        $response = $this->delete('api/2');

        $response->assertStatus(204);
    }
}

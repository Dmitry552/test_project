<?php

namespace App\Http\Repositories;

use App\Models\Service;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class ServiceRepository
{
    /**
     * @return Collection
     */
    public function getServices(): Collection
    {
        return Service::query()->get();
    }

    /**
     * @param array $data
     * @return Model
     */
    public function createService(array $data): Model
    {
        return Service::query()->create($data);
    }

    /**
     * @param Model $model
     * @return bool
     */
    public function deleteService(Model $model): bool
    {
        return $model->delete();
    }
}

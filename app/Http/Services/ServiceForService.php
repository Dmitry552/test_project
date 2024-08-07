<?php

namespace App\Http\Services;

use App\Http\Repositories\ServiceRepository;
use App\Http\Resources\Service\ServiceCollection;
use App\Http\Resources\Service\ServiceResource;
use App\Models\Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class ServiceForService
{
    private ServiceRepository $repository;

    public function __construct(ServiceRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @return JsonResponse
     */
    public function getServices(): JsonResponse
    {
        $services = $this->repository->getServices();

        return response()->json(new ServiceCollection($services));
    }

    /**
     * @param array $data
     * @return JsonResponse
     */
    public function createService(array $data): JsonResponse
    {
        $services = $this->repository->createService($data);

        return response()->json(new ServiceResource($services));
    }

    /**
     * @param Service $service
     * @return Response
     */
    public function deleteService(Service $service): Response
    {
        $services = $this->repository->deleteService($service);

        return response()->noContent();
    }
}

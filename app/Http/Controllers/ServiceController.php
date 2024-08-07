<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateServiceRequest;
use App\Http\Services\ServiceForService;
use App\Models\Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class ServiceController extends Controller
{
    private ServiceForService $service;

    public function __construct(ServiceForService $service)
    {
        $this->service = $service;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        return $this->service->getServices();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateServiceRequest $request): JsonResponse
    {
        return $this->service->createService($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service): Response
    {
        return $this->service->deleteService($service);
    }
}

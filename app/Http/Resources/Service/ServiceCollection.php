<?php

namespace App\Http\Resources\Service;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ServiceCollection extends ResourceCollection
{
    public function toArray(Request $request): array
    {
        return [
            'data' => ServiceResource::collection($this)
        ];
    }
}

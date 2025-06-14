<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    protected $middlewareGroups = [
    'api' => [
        \App\Http\Middleware\Cors::class, // tu middleware CORS
        \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class, // Aquí, NO en $routeMiddleware
        'throttle:api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],
];


    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'cors' => \App\Http\Middleware\Cors::class, // Esto es opcional si ya lo pones en api group
    ];
}

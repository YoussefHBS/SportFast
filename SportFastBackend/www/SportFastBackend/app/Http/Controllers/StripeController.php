<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Checkout\Session;

class StripeController extends Controller
{
    public function crearSesion(Request $request)
    {
        // ayuda de ChatGP
        Stripe::setApiKey(config('services.stripe.secret'));

        $lineItems = collect($request->input('items'))->map(function ($item) {
            return [
                'price_data' => [
                    'currency' => 'eur',
                    'product_data' => [
                        'name' => $item['nombre'] ?? 'Producto sin nombre',
                    ],
                    'unit_amount' => intval($item['precio_unitario'] * 100),
                ],
                'quantity' => $item['cantidad'] ?? 1,
            ];
        })->toArray();

        try {
            $session = Session::create([
                'payment_method_types' => ['card'],
                'line_items' => $lineItems,
                'mode' => 'payment',
                'success_url' => 'https://sportfast.zapto.org/carrito',
                'cancel_url' => 'https://sportfast.zapto.org/carrito',
            ]);
            return response()->json(['url' => $session->url]);

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error al crear la sesión de Stripe',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}

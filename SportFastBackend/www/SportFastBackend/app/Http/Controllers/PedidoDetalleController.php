<?php

namespace App\Http\Controllers;

use App\Models\PedidoDetalle;
use Illuminate\Http\Request;

class PedidoDetalleController extends Controller
{
    public function index()
    {
        return PedidoDetalle::with('pedido', 'producto')->get();
    }

    public function show($id)
    {
        return PedidoDetalle::with('pedido', 'producto')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $detalle = PedidoDetalle::create($request->all());
        return response()->json($detalle, 201);
    }

    public function update(Request $request, $id)
    {
        $detalle = PedidoDetalle::findOrFail($id);
        $detalle->update($request->all());
        return response()->json($detalle, 200);
    }

    public function destroy($id)
    {
        PedidoDetalle::destroy($id);
        return response()->json(null, 204);
    }
}

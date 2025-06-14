<?php

namespace App\Http\Controllers;

use App\Models\EstadoPedido;
use Illuminate\Http\Request;

class EstadoPedidoController extends Controller
{
    public function index()
    {
        $estados = EstadoPedido::all();
        return response()->json($estados);
    }

    public function show($id)
    {
        $estado = EstadoPedido::find($id);
        if (!$estado) {
            return response()->json(['message' => 'Estado de pedido no encontrado'], 404);
        }
        return response()->json($estado);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
        ]);

        $estado = EstadoPedido::create([
            'nombre' => $request->nombre,
        ]);

        return response()->json($estado, 201);
    }

    public function update(Request $request, $id)
    {
        $estado = EstadoPedido::find($id);
        if (!$estado) {
            return response()->json(['message' => 'Estado de pedido no encontrado'], 404);
        }

        $request->validate([
            'nombre' => 'required|string|max:255',
        ]);

        $estado->nombre = $request->nombre;
        $estado->save();

        return response()->json($estado);
    }

    public function destroy($id)
    {
        $estado = EstadoPedido::find($id);
        if (!$estado) {
            return response()->json(['message' => 'Estado de pedido no encontrado'], 404);
        }
        $estado->delete();

        return response()->json(['message' => 'Estado de pedido eliminado']);
    }
}

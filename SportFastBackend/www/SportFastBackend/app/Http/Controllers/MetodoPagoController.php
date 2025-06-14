<?php

namespace App\Http\Controllers;

use App\Models\MetodoPago;
use Illuminate\Http\Request;

class MetodoPagoController extends Controller
{
    public function index()
    {
        return MetodoPago::with('pagos')->get();
    }

    public function show($id)
    {
        return MetodoPago::with('pagos')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $metodo = MetodoPago::create($request->all());
        return response()->json($metodo, 201);
    }

    public function update(Request $request, $id)
    {
        $metodo = MetodoPago::findOrFail($id);
        $metodo->update($request->all());
        return response()->json($metodo, 200);
    }

    public function destroy($id)
    {
        MetodoPago::destroy($id);
        return response()->json(null, 204);
    }
}

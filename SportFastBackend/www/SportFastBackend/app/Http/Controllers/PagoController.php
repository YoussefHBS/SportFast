<?php

namespace App\Http\Controllers;

use App\Models\Pago;
use Illuminate\Http\Request;

class PagoController extends Controller
{
    public function index()
    {
        return Pago::with('pedido', 'metodoPago')->get();
    }

    public function show($id)
    {
        return Pago::with('pedido', 'metodoPago')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $pago = Pago::create($request->all());
        return response()->json($pago, 201);
    }

    public function update(Request $request, $id)
    {
        $pago = Pago::findOrFail($id);
        $pago->update($request->all());
        return response()->json($pago, 200);
    }

    public function destroy($id)
    {
        Pago::destroy($id);
        return response()->json(null, 204);
    }
}

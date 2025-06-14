<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;

class AdminController extends Controller
{
    public function index()
    {
        if (!auth()->user() || !auth()->user()->admin) {
    return response()->json(['error' => 'No autorizado'], 403);
}


        return Producto::with('colores', 'tallas')->get();
    }

    public function store(Request $request)
    {
        if (!auth()->user() || !auth()->user()->admin) {
    return response()->json(['error' => 'No autorizado'], 403);
}


        $producto = Producto::create($request->all());
        return response()->json($producto);
    }

    public function update(Request $request, $id)
    {
       if (!auth()->user() || !auth()->user()->admin) {
    return response()->json(['error' => 'No autorizado'], 403);
}


        $producto = Producto::findOrFail($id);
        $producto->update($request->all());
        return response()->json($producto);
    }

    public function destroy($id)
    {
       if (!auth()->user() || !auth()->user()->admin) {
    return response()->json(['error' => 'No autorizado'], 403);
}


        Producto::destroy($id);
        return response()->json(['mensaje' => 'Producto eliminado']);
    }
}

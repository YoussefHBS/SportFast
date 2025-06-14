<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{public function index(Request $request)
{
    $query = Producto::with(['categoria', 'colores', 'tallas']);

    if ($request->has('categoria')) {
        $categoria = $request->input('categoria');
        $query->whereHas('categoria', function($q) use ($categoria) {
            $q->where('nombre', $categoria);
        });
    }

    return $query->get();
}


    public function show($id)
{
    return Producto::with(['categoria', 'colores', 'tallas'])->findOrFail($id);
}


    public function store(Request $request)
    {
        $producto = Producto::create($request->all());
        return response()->json($producto, 201);
    }

    public function update(Request $request, $id)
    {
        $producto = Producto::findOrFail($id);
        $producto->update($request->all());
        return response()->json($producto, 200);
    }

    public function destroy($id)
    {
        Producto::destroy($id);
        return response()->json(null, 204);
    }

    public function asignarColores(Request $request, $id)
{
    $producto = Producto::findOrFail($id);
    $producto->colores()->sync($request->input('colores')); // array de IDs
    return response()->json(['mensaje' => 'Colores asignados correctamente.']);
}

public function asignarTallas(Request $request, $id)
{
    $producto = Producto::findOrFail($id);
    $producto->tallas()->sync($request->input('tallas')); // array de IDs
    return response()->json(['mensaje' => 'Tallas asignadas correctamente.']);
}

}

<?php

namespace App\Http\Controllers;

use App\Models\Talla;
use Illuminate\Http\Request;

class TallaController extends Controller
{
    // Obtener todas las tallas
    public function index()
    {
        $tallas = Talla::all();
        return response()->json($tallas);
    }

    // Obtener una talla por ID
    public function show($id)
    {
        $talla = Talla::find($id);
        if (!$talla) {
            return response()->json(['message' => 'Talla no encontrada'], 404);
        }
        return response()->json($talla);
    }

    // Crear una nueva talla
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
        ]);

        $talla = Talla::create([
            'nombre' => $request->nombre,
        ]);

        return response()->json($talla, 201);
    }

    // Actualizar talla existente
    public function update(Request $request, $id)
    {
        $talla = Talla::find($id);
        if (!$talla) {
            return response()->json(['message' => 'Talla no encontrada'], 404);
        }

        $request->validate([
            'nombre' => 'required|string|max:255',
        ]);

        $talla->nombre = $request->nombre;
        $talla->save();

        return response()->json($talla);
    }

    // Eliminar talla
    public function destroy($id)
    {
        $talla = Talla::find($id);
        if (!$talla) {
            return response()->json(['message' => 'Talla no encontrada'], 404);
        }
        $talla->delete();

        return response()->json(['message' => 'Talla eliminada']);
    }
}

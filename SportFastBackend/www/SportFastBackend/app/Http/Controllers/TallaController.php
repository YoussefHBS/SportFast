<?php

namespace App\Http\Controllers;

use App\Models\Talla;
use Illuminate\Http\Request;

class TallaController extends Controller
{
    public function index()
    {
        $tallas = Talla::all();
        return response()->json($tallas);
    }

    public function show($id)
    {
        $talla = Talla::find($id);
        if (!$talla) {
            return response()->json();
        }
        return response()->json($talla);
    }

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

    public function update(Request $request, $id)
    {
        $talla = Talla::find($id);
        if (!$talla) {
            return response()->json();
        }

        $request->validate([
            'nombre' => 'required|string|max:255',
        ]);

        $talla->nombre = $request->nombre;
        $talla->save();

        return response()->json($talla);
    }

    public function destroy($id)
    {
        $talla = Talla::find($id);
        if (!$talla) {
            return response()->json();
        }
        $talla->delete();

        return response()->json();
    }
}

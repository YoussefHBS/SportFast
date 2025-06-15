<?php

namespace App\Http\Controllers;

use App\Models\Color;
use Illuminate\Http\Request;

class ColorController extends Controller
{
    public function index()
    {
        $colores = Color::all();
        return response()->json($colores);
    }

    public function show($id)
    {
        $color = Color::find($id);
        if (!$color) {
            return response()->json();
        }
        return response()->json($color);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
        ]);

        $color = Color::create([
            'nombre' => $request->nombre,
        ]);

        return response()->json($color, 201);
    }

    public function update(Request $request, $id)
    {
        $color = Color::find($id);
        if (!$color) {
            return response()->json();
        }

        $request->validate([
            'nombre' => 'required|string|max:255',
        ]);

        $color->nombre = $request->nombre;
        $color->save();

        return response()->json($color);
    }

    public function destroy($id)
    {
        $color = Color::find($id);
        if (!$color) {
            return response()->json();
        }
        $color->delete();

        return response()->json();
    }
}

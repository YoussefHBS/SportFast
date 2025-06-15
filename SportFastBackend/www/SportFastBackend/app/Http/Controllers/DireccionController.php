<?php

namespace App\Http\Controllers;

use App\Models\Direccion;
use Illuminate\Http\Request;

class DireccionController extends Controller
{
    public function index()
    {
        return Direccion::with('cliente')->get();
    }

    public function show($id)
    {
        return Direccion::with('cliente')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $direccion = Direccion::create($request->all());
        return response()->json($direccion, 201);
    }

    public function update(Request $request, $id)
    {
        $direccion = Direccion::findOrFail($id);
        $direccion->update($request->all());
        return response()->json($direccion, 200);
    }

    public function destroy($id)
    {
        Direccion::destroy($id);
        return response()->json();
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Models\Cliente;

class AuthController extends Controller
{
    public function register(Request $request)
{
     $validated = $request->validate([
        'nombre' => 'required',
        'apellido1' => 'required',
        'direccion' => 'required', // 👈 ¡Debe estar aquí!
        'correo' => 'required|email|unique:cliente',
        'telefono' => 'required',
        'password' => 'required|confirmed',
    ]);

     $cliente = Cliente::create([
        'nombre' => $request->nombre,
        'apellido1' => $request->apellido1,
        'direccion' => $request->direccion, // 👈 ¡También aquí!
        'correo' => $request->correo,
        'telefono' => $request->telefono,
        'password' => bcrypt($request->password),
        'admin' => 0,
    ]);


    return response()->json([
        'message' => 'Usuario registrado correctamente',
        'cliente' => $cliente,
    ], 201);
}


    public function login(Request $request)
    {
        $request->validate([
            'correo' => 'required|email',
            'password' => 'required',
        ]);

        $cliente = Cliente::where('correo', $request->correo)->first();

        if (!$cliente || !Hash::check($request->password, $cliente->password)) {
            throw ValidationException::withMessages([
                'correo' => ['Las credenciales son incorrectas.'],
            ]);
        }

        $token = $cliente->createToken('auth_token')->plainTextToken;

        return response()->json([
            'token' => $token,
            'cliente' => $cliente,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'mensaje' => 'Sesión cerrada correctamente.',
        ]);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}

<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cliente extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $table = 'cliente';

    protected $fillable = [
        'nombre', 
        'apellido1', 
        'apellido2', 
        'direccion', 
        'correo', 
        'telefono', 
        'admin', 
        'password'
    ];

    protected $hidden = [
        'password',
        'remember_token', // aunque no uses login web, por convención
    ];

    public function direcciones(): HasMany
    {
        return $this->hasMany(Direccion::class, 'cliente_id');
    }

    public function pedidos(): HasMany
    {
        return $this->hasMany(Pedido::class, 'cliente_id');
    }
}

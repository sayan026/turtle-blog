<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

class AuthController extends Controller
{
    public function signin(Request $req)
    {
        $user = User::where('email', $req->input('email'))->first();

        if (empty($user)) {
            return response()->json(['message' => 'Invalid User'], 401);
        }

        $credentials = request(['email', 'password']);
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function signout()
    {
        auth()->logout();
        return;
    }

    public function respondWithToken($token) {
        return response()->json([
            'access_token' => $token,
            'token_type'   => 'bearer',
            'user'         => [
                'id'    => auth()->user()->id,
                'name'  => auth()->user()->name,
                'email' => auth()->user()->email
            ],
            'expires_in' => auth('api')->factory()->getTTL() * 180
        ]);
    }
}

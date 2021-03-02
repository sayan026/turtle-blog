<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function __construct()
    {
        if (!auth()->check()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }

    public function list(Request $req)
    {
        $keyword = $req->input('keyword');
        if (!empty($keyword)) {
            $data = User::where('name', 'like', '%' . $keyword . '%')->paginate(5);
        } else {
            $data = User::paginate(5);
        }
        $data->appends(['keyword' => ''])->links();

        return response()->json($data);
    }
}

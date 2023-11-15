<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use EllipseSynergie\ApiResponse\Contracts\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $users = User::get();
        return Response(['data' => $users], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function login(Request $request){
        $input = $request->all();
         Auth::attempt($input);
         $user = Auth::user();
        $role = 'admin';
        if ($user->role==0) {
            $role = 'user';
        }
        $token = $user->createToken('sadfsadfdsdfsadf')->accessToken;
        return Response(['role'=>$role,'token'=> $token],200);
    }


    public function logout(Request $request)
    {
        $access_token = Auth::guard('api')->user()->token();
        $access_token->delete();
        return Response(['message' => 'Log out successful'], 200);
        // $user=Auth::guard('api')->user();
        // return Response(['user' => $user], 200);
    }

    public function register(Request $request){
        $input = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'phone' => 'required',
            'address' => 'required'
        ]);
    $user = new User;
    $user->name = $input['name'];
    $user->email = $input['email'];
    $user->password = bcrypt($input['password']); // Hash the password for security
    $user->phone = $input['phone'];
    $user->address = $input['address'];

    // Save the user to the database
    $user->save();
    return Response(['message'=> $user],200);
    }
}

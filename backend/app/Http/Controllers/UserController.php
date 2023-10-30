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

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}

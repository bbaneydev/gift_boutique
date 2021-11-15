class CartsController < ApplicationController
    skip_before_action :confirm_authentication

    def index
        render json: current_user.carts.all
    end

    def create
        cart = current_user.carts.create(cart_params)
        if cart.save
            render json: cart
        else
            render json: {error: cart.errors}, status: :unprocessable_entity
        end
    end

    def update
        cart = Cart.find(params[:id])
        if cart
            cart.update(cart_params)
            render json: cart
        else 
            render json: {error: cart.errors}, status: :unprocessable_entity
        end
    end

    def destroy
        cart = Cart.find(params[:id])
        cart.destroy
    end

    private
    def cart_params
        params.permit(:item_id, :quantity)
    end
end

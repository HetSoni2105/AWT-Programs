from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, this is Home Page"

@app.route('/about')
def about():
    return "This is About page."

@app.route('/user/<username>')
def show_user(username):
    return f'Hello {username} !'

@app.route('/user/<int:userid>')
def show_userid(userid):
    return f'Your UserId is {userid} !'

@app.route('/user/<float:balance>')
def show_balance(balance):
    return f'Your balance is {balance} !'



if __name__ == '__main__':
    app.run(debug=True)
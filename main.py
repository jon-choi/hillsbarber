from flask import Flask, render_template

app = Flask(__name__)
app.config['DEBUG'] = True

# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.

@app.route('/')
def hello(name=None):
    """Return a friendly HTTP greeting."""
    return render_template('template.html', name=name, text="Jinja Flask")
#    return render_template('bootstrap_cover.html', name=name)

# @app.route('/rates')
# def helloRates(name='rates'):
    # return render_template('template.html',name=name)

@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, nothing at this URL.', 404

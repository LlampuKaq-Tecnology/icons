from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import random
import string

# Configura el controlador web (asegúrate de que el controlador esté en tu PATH)
driver = webdriver.Chrome()  # Cambia a webdriver.Firefox() si estás usando Firefox
driver.get('https://uceeduec.weebly.com/')  # Reemplaza con la URL de tu página web

# Función para generar un correo electrónico aleatorio
def generate_random_email():
    username = ''.join(random.choice(string.ascii_letters) for _ in range(8))
    domain = ''.join(random.choice(string.ascii_letters) for _ in range(5))
    return f'{username}@{domain}.com'

# Localiza los campos de entrada y el botón de envío
input1 = driver.find_element_by_id('input-640488560397199553')  # Reemplaza con el ID de tu primer input
input2 = driver.find_element_by_id('input-652722692357146800')  # Reemplaza con el ID de tu segundo input
submit_button = driver.find_element_by_class_name('wsite-button')  # Reemplaza con el ID de tu botón de envío

# Define el número de veces que deseas ejecutar el código
n_veces = 5  # Cambia esto al número deseado de ejecuciones

for _ in range(n_veces):
    # Genera texto aleatorio para los campos de entrada
    random_email = generate_random_email()
    random_text = ''.join(random.choice(string.ascii_letters) for _ in range(10))

    # Llena los campos de entrada con los datos generados
    input1.clear()  # Limpia el campo de entrada
    input1.send_keys(random_email)
    input2.clear()  # Limpia el campo de entrada
    input2.send_keys(random_text)

    # Haz clic en el botón de envío
    submit_button.click()

# Cierra el controlador web cuando hayas terminado
driver.quit()

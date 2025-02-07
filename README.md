# HNG BE-00 : Basic Info App

## Project Description
This is a simple express API that takes a number and returns interesting mathematical properties about it, along with a fun fact.

## How to set up locally
1. Clone the repo
    ```bash
    git clone https://github.com/oroinbelt/hng-devOps-01.git
    ```

2. Navigate to the project directory
    ```bash
    cd hng-BE-01
    ```

3. Install the dependencies
    ```bash
    npm install
    ```

4. Start the app
    ```bash
    node index
    ```

5. The app will be running at http://localhost:4000.


## API Documentation

### Endpoint
- **GET** `/api/classify-number?number=371`

### Response Format
The API returns the following JSON response:

```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  // sum of its digits
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}
```

### Example usage
You can test the API using curl or any API testing tool like Postman:
```bash
curl http://localhost:4000/api/classify-number?number=371
```


Learn more about this project here [backend](https://hng.tech/hire/nodejs-developers)
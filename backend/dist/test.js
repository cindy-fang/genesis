"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const API_BASE_URL = "https://api.cloudflare.com/client/v4/accounts/1c49a64fcdcf951fc1c9cfef24f93ff3/ai/run/";
const headers = {
    Authorization: `Bearer ${process.env.API_KEY}`,
};
async function run(model, inputs) {
    const input = {
        type: "object",
        properties: {
            prompt: {
                type: "string",
            },
            image: {
                oneOf: [
                    {
                        type: "string",
                        format: "binary",
                    },
                    {
                        type: "object",
                        properties: {
                            image: {
                                type: "array",
                                items: {
                                    type: "number",
                                },
                            },
                        },
                    },
                ],
            },
            mask: {
                oneOf: [
                    {
                        type: "string",
                        format: "binary",
                    },
                    {
                        type: "object",
                        properties: {
                            mask: {
                                type: "array",
                                items: {
                                    type: "number",
                                },
                            },
                        },
                    },
                ],
            },
            num_steps: {
                type: "integer",
                default: 20,
                maximum: 20,
            },
            strength: {
                type: "number",
                default: 1,
            },
            guidance: {
                type: "number",
                default: 7.5,
            },
        },
        required: ["prompt"],
    };
    try {
        const response = await fetch(`${API_BASE_URL}${model}`, {
            method: "POST",
            headers,
            body: JSON.stringify(input),
        });
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error running model:", error);
        throw error; // Or handle the error differently
    }
}
const inputs = [
    "You are a friendly assistant that helps write stories",
    "Generate an anime carrot image",
];
(async () => {
    try {
        const output = await run("@cf/meta/dreamshaper-8-lcm", inputs);
        console.log(output);
    }
    catch (error) {
        console.error("Error generating story:", error);
    }
})();

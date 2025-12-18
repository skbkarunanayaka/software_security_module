const Joi = require('joi');

const signupSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
        .min(8)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')) // Example pattern, adjust as needed for "strong" rules
        .required()
        .messages({
            'string.pattern.base': 'Password must contain only alphanumeric characters and be between 3 and 30 characters long.',
            'string.min': 'Password must be at least 8 characters long.'
        }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        'any.only': 'Passwords do not match'
    })
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

module.exports = {
    signupSchema,
    loginSchema
};

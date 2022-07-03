import jwtSimple from "jwt-simple";

const { JWT_SECRET = "JWT_SECRET" } = process.env;

export const jwtEncode = (payload: any) => {
    return jwtSimple.encode(payload, JWT_SECRET);
};

export const jwtDecode = (payload: any) => {
    try {
        return jwtSimple.decode(payload, JWT_SECRET);
    } catch (error) {
        return null;
    }
};

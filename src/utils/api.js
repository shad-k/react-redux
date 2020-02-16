import data from "../data";
import id from "./id";

export const fetchUsers = () => {
  return data.map(({ name, email, address, phone, website, company }) => ({
    /*
     * Adding an id field to the user data.
     * This would help while editing.
     * Ideally should be done on the server.
     */
    id: id(),
    name,
    email,
    address: { city: address.city },
    phone,
    website,
    company: { name: company.name }
  }));
};

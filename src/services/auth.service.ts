import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { CreateUserDto } from '@/dtos/user.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { User } from '@/interfaces/user.interface';
import userModel from '@/models/user.model';
import { isEmpty } from '@utils/util';

class AuthService {
  public users = userModel;

  public async signup(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You've not provided valid user data.");

    const findUser: User = await this.users.findOne({ username: userData.username });
    if (findUser) throw new HttpException(409, `Your username ${userData.username} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });

    return createUserData;
  }

  public async login(userData: CreateUserDto): Promise<{ cookie: string; findUser: User }> {
    if (isEmpty(userData)) throw new HttpException(400, "You've not provided valid user data.");

    const findUser: User = await this.users.findOne({ username: userData.username });
    if (!findUser) throw new HttpException(409, `Your username ${userData.username} not found.`);

    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Your passwords do not match.');

    const tokenData = this.createToken(findUser);
    const cookie = this.createCookie(tokenData);

    return { cookie, findUser };
  }

  public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You've not provided valid user data.");

    const findUser: User = await this.users.findOne({ username: userData.username, password: userData.password });
    if (!findUser) throw new HttpException(409, `Your username ${userData.username} not found.`);

    return findUser;
  }

  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;

/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET
 * 让 .NET 开发更简单、更通用、更流行。前后端分离架构(.NET6/Vue3)，开箱即用紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * Contact: 515096995@qq.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { StatusEnum } from './status-enum';
/**
 * 
 * @export
 * @interface AddPrintInput
 */
export interface AddPrintInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof AddPrintInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof AddPrintInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof AddPrintInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof AddPrintInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof AddPrintInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof AddPrintInput
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof AddPrintInput
     */
    tenantId?: number | null;
    /**
     * 打印模板
     * @type {string}
     * @memberof AddPrintInput
     */
    template: string;
    /**
     * 排序
     * @type {number}
     * @memberof AddPrintInput
     */
    orderNo?: number;
    /**
     * 
     * @type {StatusEnum}
     * @memberof AddPrintInput
     */
    status?: StatusEnum;
    /**
     * 备注
     * @type {string}
     * @memberof AddPrintInput
     */
    remark?: string | null;
    /**
     * 名称
     * @type {string}
     * @memberof AddPrintInput
     */
    name: string;
}
